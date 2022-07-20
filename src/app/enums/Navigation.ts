interface INavigationInformation {
    home:INavigationElement;
    aboutMe:INavigationElement;
    projects:INavigationElement;
    profile:INavigationElement;
    undefined:INavigationElement;
    linkedIn:ISocialMedia;
    gitHub:ISocialMedia;
}

interface INavigationElement {
    path:string;
    label:string;
}

interface ISocialMedia {
    icon:string;
    link:string;
}

const navigationInformation:INavigationInformation = {
    home:{
        path:'home',
        label:'HOME',
    },
    aboutMe:{
        path:'about-me',
        label:'ABOUT ME',
    },
    projects:{
        path:'projects',
        label:'PROJECT',
    },
    profile:{
        path:'/profile',
        label:'PROFILE',
    },
    undefined:{
        path:'*',
        label:'none'
    },
    linkedIn:{
        icon:'nothing',
        link:'nothing'
    },
    gitHub:{
        icon:'gitHub',
        link:' nigin'
    }
};

export { INavigationInformation, INavigationElement, navigationInformation };
//TODO Navigation Information: paths, Navbar tabs label