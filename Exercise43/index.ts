{
    function MakeGreat(magicians: string[]):string[]{
        for(let i=0;i<magicians.length;i++){
            magicians[i] = `Great ${magicians[i]}`;
        }
        return magicians;
    }
    function ShowMagicians(magicians: string[]): void {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
      
    const magician_names = ["Mage 1", "Mage 2", "Mage 3"];
    const greatMagicians = MakeGreat([...magician_names]);
    
    ShowMagicians(magician_names);  
    ShowMagicians(greatMagicians);
}