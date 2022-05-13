/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    // <div
    //   className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
    //   style={{
    //     backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/dozzy-1/14.png')})`,
    //   }}
    // >
    //   {/* begin::Content */}
    //   <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
    //     {/* begin::Logo */}
    //     <a href='#' className='mb-12'>
    //       <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-1.svg')} className='h-45px' />
    //     </a>
    //     {/* end::Logo */}
    //     {/* begin::Wrapper */}
    //     <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    //       <Outlet />
    //     </div>
    //     {/* end::Wrapper */}
    //   </div>
    //   {/* end::Content */}
    //   {/* begin::Footer */}
     
    //   {/* end::Footer */}
    // </div>

    <div className="d-flex flex-column flex-root">
  <div className="d-flex flex-column flex-lg-row flex-column-fluid">
    <div
      className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
    
    >
      <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
        <div className="d-flex flex-row-fluid flex-column  p-10 pt-lg-20">

        <Outlet />
        <p className='text-dark mt-12'>©2020–2021 All Rights Reserved. FutureHub® is a registered trademark.</p>

<p className='text-info'>Cookie Preferences, Privacy, and Terms.</p>
        </div>
    
      </div>
    </div>
    <div className="d-flex flex-column flex-lg-row-fluid py-10"   style={{ backgroundColor: "#E4F7FD" }}>
      <div className="d-flex flex-center flex-column flex-column-fluid">
        <div className="my-auto px-5">
        
            <img
              alt="Logo"
              src={toAbsoluteUrl('/media/logos/loginreg.svg')}
              className="img-fluid "
            />
         
          <h5
            className="text-dark text-center"
           
          >
          FH Admin gir deg full oversikt og kontroll over alle moduler
          </h5>
          <p className="text-muted text-center mt-5" >
          Få full kontroll over alt som rører på seg i FutureHub gjennom en enkel admin-backendsom <br/>
           gir deg mulighet til å hjelpe kunder, administrere moduler samt få tilgang til data som  <br/> danner grunnlag for viktige avgjørelser.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</div>

  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
