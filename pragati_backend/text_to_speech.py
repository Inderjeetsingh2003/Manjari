from flask import Flask, request, jsonify, send_file
import edge_tts
import asyncio
import os

app = Flask(__name__)

# Function for text-to-speech conversion
async def text_to_speech(text, output_file, rate="-20%", voice="en-US-GuyNeural"):
    try:
        # Create an instance of Communicate with the specified voice
        communicate = edge_tts.Communicate(text, voice=voice, rate=rate)
        
        # Save the audio output to the file
        await communicate.save(output_file)
        
    except edge_tts.exceptions.NoAudioReceived as e:
        return f"No audio was received. Error: {e}", False
    except Exception as e:
        return f"An error occurred: {e}", False
    return "Success", True

# Endpoint to accept POST request for TTS
@app.route('/tts', methods=['POST'])
def tts():
    try:
        # Extract the text from the request
        data = request.json
        text = data.get('text')
        if not text:
            return jsonify({'error': 'Text is required'}), 400

        # Create directory in root folder if it doesn't exist
        output_dir = os.path.join(os.getcwd(), 'output_files')
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # Define output file path
        output_file = os.path.join(output_dir, "output.mp3")
        
        # Run the text-to-speech process
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        message, success = loop.run_until_complete(text_to_speech(text, output_file))
        
        if not success:
            return jsonify({'error': message}), 500

        # Send the generated audio file to the client
        return send_file(output_file, as_attachment=True)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
