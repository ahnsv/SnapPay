function saveChanges() {
    // Get a value saved in a form

    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({ 'value': null }, function () {
        // Notify that we saved.
        // onmessage('Settings saved')!;
    });
}