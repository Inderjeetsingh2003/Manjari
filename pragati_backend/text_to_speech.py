import edge_tts
import asyncio

async def text_to_speech(text, output_file, rate="-20%", voice="en-US-GuyNeural"):
    try:
        # Create an instance of Communicate with the specified voice
        communicate = edge_tts.Communicate(text, voice=voice, rate=rate)
        
        # Save the audio output to the file
        await communicate.save(output_file)
        
    except edge_tts.exceptions.NoAudioReceived as e:
        print(f"No audio was received. Please verify that your parameters are correct. Error: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
text = "rahul"
output_file = "output.mp3"

# Run the TTS conversion
asyncio.run(text_to_speech(text, output_file))
