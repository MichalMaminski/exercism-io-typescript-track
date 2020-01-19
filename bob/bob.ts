class Bob {
    hey(sentance: string): string {
        if(new RegExp('^[A-Z\\W]*\\?$').test(sentance)) {
            return 'Calm down, I know what I\'m doing!';
        }
        
        if(new RegExp('\\?\\s*$').test(sentance)) {
            return 'Sure.';
        }

        if(new RegExp('^[A-Z\\d\\W]+$').test(sentance) &&
            !new RegExp('^[\\d\\W]+$').test(sentance)) {
            return 'Whoa, chill out!';
        }

        if(new RegExp('^[\\s]*$').test(sentance)){
            return 'Fine. Be that way!';
        }

        return 'Whatever.';
    }
}

export default Bob