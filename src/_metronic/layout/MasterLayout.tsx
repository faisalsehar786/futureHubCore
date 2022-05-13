import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core' 
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, Main, InviteUsers, UpgradePlan} from '../partials'
import {MenuComponent} from '../assets/ts/components'
import $ from 'jquery';
const MasterLayout = () => {

  
  

  useEffect(() => {

  $('#kt_aside_toggle').on('click', () => {  
    $('body').addClass('mobileVer');
    $('.menue-drawrCustom').attr('style','display: block !important');
   });
   
  });

// State to show/hide accordion


const ScondaryMenueToggler=()=>{
  let bodyObjcet= $('body');
  bodyObjcet.find('.menue-drawrCustom').hide();
  bodyObjcet.find('.header').css({"left": "65px"});
  bodyObjcet.find('.content').css({"margin-left": "0px"});
  
}

   
// useEffect(() => {    
 

// if(showScnM){

// let bodyObjcet= $('body');
// bodyObjcet.find('.menue-drawrCustom').show();

// bodyObjcet.find('.header').css({"left": "365px"});

// bodyObjcet.find('.content').css({"margin-left": "290px"});

// }else{

// let bodyObjcet= $('body');
// bodyObjcet.find('.menue-drawrCustom').hide();
// bodyObjcet.find('.header').css({"left": "65px"});
// bodyObjcet.find('.content').css({"margin-left": "0px"});

// }
    
// eslint-disable-next-line @typescript-eslint/no-use-before-define
//}, [showScnM])


  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        {/* begin::Page */}
        <div className='page d-flex flex-row flex-column-fluid'>
        
          <AsideDefault />

         
          {/* begin::Wrapper */}
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />

            <Toolbar />

            {/* begin::Content */}
            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>

            <button onClick={()=>ScondaryMenueToggler()}   className=
            'btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-info shadow-sm fsatollenav'
            
            
            ><i className= 'las la-arrow-left me-2'></i></button>
              <Content>
                <Outlet />
              </Content>
            </div>
            {/* end::Content */}
            <Footer />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Page */}
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <Main />
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
