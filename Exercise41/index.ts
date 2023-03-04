{
    function ShowMagicians(magicians: string[]): void {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
      
    const magician_names = ["Mage 1", "Mage 2", "Mage 3"];
      
    ShowMagicians(magician_names);
}