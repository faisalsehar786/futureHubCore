import {FC} from 'react'
import clsx from 'clsx'
import {useAuth} from '../../../../app/modules/auth'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-lg-3',
  btnClass = 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px border border-gray-300',
  userAvatarClass = 'symbol-30px symbol-md-40px'
  //  btnIconClass = 'svg-icon-1'

const Topbar: FC = () => {
  const {config} = useLayout()
  // const {currentUser, logout} = useAuth()
 const {currentUser} = useAuth()
  return (
  
    
    <div className='d-flex align-items-stretch justify-self-end flex-shrink-0'>
      {/* Search */}
      <div className={clsx('d-flex align-items-stretch', itemClass)}>
        <Search />
      </div>
     

      {/* NOTIFICATIONS */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Menu- wrapper */}
        <div
          className={clsx('btn btn-icon btn-active-light-primary position-relative ', btnClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
         <KTSVG path="/media/icons/duotune/general/gen007.svg" className="svg-icon-dark svg-icon-1" />
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper */}
      </div>

      <div className={clsx('d-flex align-items-center', itemClass)}>
      <div className='align-items-center'>
															<div className="fs-7 text-gray-800 text-hover-primary fw-bolder" style={{ lineHeight: "8px" }}> {currentUser?.first_name} {currentUser?.last_name}</div>
															<div className="fs-8 text-muted fw-bold mt-1">SuperAdmin</div>
														</div>
                            </div>
         {/* begin::User */}
      <div className={clsx('d-flex align-items-center', itemClass)} id='kt_header_user_menu_toggle'>
      
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='metronic' />

         
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}
      
       {/* Activities */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Drawer toggle */}
        <div
          className={clsx('btn btn-icon btn-active-light-primary btn-custom', btnClass)}
          id='kt_activities_toggle'
        >
        <KTSVG path="/media/icons/duotune/abstract/abs037.svg" className="svg-icon-dark svg-icon-1" />
        </div>
        {/* end::Drawer toggle */}
      </div>
      {/* CHAT */}
      {/* <div className={clsx('d-flex align-items-center', itemClass)}> */}
        {/* begin::Menu wrapper */}
        {/* <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom position-relative',
            btnClass
          )}
          id='kt_drawer_chat_toggle'
        >
          <KTSVG path='/media/icons/duotune/communication/com012.svg' className={btnIconClass} />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div> */}
        {/* end::Menu wrapper */}
      {/* </div> */}

      {/* Quick links */}
      {/* <div className={clsx('d-flex align-items-center', itemClass)}> */}
        {/* begin::Menu wrapper */}
        {/* <div
          className={clsx('btn btn-icon btn-active-light-primary btn-custom', btnClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <KTSVG path='/media/icons/duotune/general/gen025.svg' className={btnIconClass} />
        </div>
        <QuickLinks /> */}
        {/* end::Menu wrapper */}
      {/* </div> */}

    

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export {Topbar}
