function downloadMp3(BeatNumber) {
	// Replace 'path/to/your/file.mp3' with the actual path or URL of your MP3 file
	var mp3Url = ['JaviChip/CutieHackProject2023/Try MP3 Player/truly fire song that must be completed.mp3','JaviChip/CutieHackProject2023/Try MP3 Player/hardest in the room.mp3'];

	// Create an invisible anchor element
	var anchor = document.createElement('a');
	anchor.style.display = 'none';

	// Set the href and download attributes to trigger the download
	anchor.href = mp3Url[BeatNumber];
	anchor.download = 'downloaded_file.mp3';

	// Append the anchor to the body
	document.body.appendChild(anchor);

	// Trigger a click on the anchor
	anchor.click();

	// Remove the anchor from the body
	document.body.removeChild(anchor);
  }
