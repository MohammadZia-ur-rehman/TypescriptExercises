"use strict";
{
    function MakeGreat(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] = `Great ${magicians[i]}`;
        }
    }
    function ShowMagicians(magicians) {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
    const magician_names = ["Mage 1", "Mage 2", "Mage 3"];
    MakeGreat(magician_names);
    ShowMagicians(magician_names);
}
