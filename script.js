var linkedin = "https://www.linkedin.com/in/firozkhan5/";
var twitter = "";
var github = "";
var instagram = "";
const social = (val)=>{
    switch(val){
        case 'linkedin': window.location = linkedin; break;
        case 'twitter': window.location = twitter; break;
        case 'github': window.location = github; break;
        case 'instagram': window.location = instagram; break;
    }
}
