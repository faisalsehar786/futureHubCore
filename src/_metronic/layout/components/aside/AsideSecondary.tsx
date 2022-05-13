import { FC, useEffect } from 'react'
import { useContext } from 'react'
import noteContext from "../../../../context/notes/noteContext"
import $ from 'jquery';

const AsideSecondary: FC = ()=>{
const context = useContext(noteContext);
    const { subMenuRecive, titleSubmenu } = context

         useEffect(() => {
        if(subMenuRecive.length>0){
        
        let bodyObjcet= $('body');
        bodyObjcet.find('.menue-drawrCustom').show();
        
        bodyObjcet.find('.header').css({"left": "365px"});
        
        bodyObjcet.find('.content').css({"margin-left": "290px"});
        $('.fsatollenav').attr('style','display: block !important');
        
        }else{
        
        let bodyObjcet= $('body');
        bodyObjcet.find('.menue-drawrCustom').hide();
        bodyObjcet.find('.header').css({"left": "65px"});
        bodyObjcet.find('.content').css({"margin-left": "0px"});
        
        }
            
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        })


    return (
        <div className='menue-drawrCustom'>
            <div className=' menu-title-gray-600 menu-state-primary 
            menu-state-icon-primary menu-state-bullet-primary
             menu-arrow-gray-500 fw-bold fs-6'>
                <h3 className='text-muted titleSubmenu mt-12 text-muted text-uppercase fs-8 ls-1'>{titleSubmenu}</h3>
                {subMenuRecive}
                </div>
                 </div>
                 )}

export { AsideSecondary }

