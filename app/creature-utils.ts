import { Creature } from './creature';

/*
    Revealing Module Pattern, for singleton function processor
    https://www.christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/
    
    Attempted to do the above, slight variation to below:
    
    http://www.sitepoint.com/understanding-es6-modules/
*/
var CreatureUtils = {
    isDead: function(creature:Creature){
        if(creature == null) return false;
        
        return (creature.hitPoints <= 0);
    },
    
    // Safer way, as experienceIfKilled is optional:
    getExperienceIfKilled: function (creature:Creature){
        if(creature == null) return 0;
        if(creature.experienceIfKilled == null) return 0;
        return creature.experienceIfKilled;
    }
}

export default CreatureUtils;