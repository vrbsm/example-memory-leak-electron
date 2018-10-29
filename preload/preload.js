const { webFrame } = require("electron");

webFrame.setSpellCheckProvider('en-US', true, {
    spellCheck(text) {
        return false;
    }
});

