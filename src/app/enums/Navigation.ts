interface INavigationInformation {
    home:INavigationElement;
    aboutMe:INavigationElement;
    projects:INavigationElement;
    profile:INavigationElement;
    undefined:INavigationElement;
}

interface INavigationElement {
    path:string;
    label:string;
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
    }
};

export { INavigationInformation, INavigationElement, navigationInformation };
//TODO Navigation Information: paths, Navbar tabs label