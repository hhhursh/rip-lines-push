import { Popover, Button} from 'antd';
import {CustomAvatar} from '../custom-avatar';
import {useGetIdentity} from '@refinedev/core';
import type { User} from '@/graphql/schema.types';
import {Text} from '../text';
import { useState  } from "react";
import { SettingOutlined} from "@ant-design/icons";
import {AccountSettings} from "./account-settings";

// const CurrentUser = () => {

//   
//   const {data:user} = useGetIdentity<User>()

 
 

//   const content = ( 
//     <div style ={{
//       display: 'flex',
//       flexDirection: 'column',
//     }}>
//         <Text
//         strong
//         style ={{ padding: '12px 20px'}}        
//         >
//           {user?.name}
//         </Text>
//         <div>
//           <Button
//             style ={{ textAlign: 'left'}}
//             icon = {<SettingOutlined />} 
//             type = "text"
//             block
//             onClick = {handleButtonClick}

//           >
//             Account Settings 
//           </Button>
//         </div>
//     </div>
//   );

  

//   return (
//     <>
//         <Popover 
//             placement="bottomRight"
//             trigger="click"
//             overlayInnerStyle={{ padding: 0 }}
//             overlayStyle={{ zIndex: 999 }}
//             content ={content}
//             onClick= {handleButtonClick}
          

//         >
//               <CustomAvatar  
//               name = {user?.name}
//               src = {user?.avatarUrl}
//               size="default"
//               style={{ cursor: 'pointer'}}
              

//               />
//         </Popover>
//     </>
//   )
// }

// export default CurrentUser

// 


export const CurrentUser = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {data:user} = useGetIdentity<User>()

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleButtonClick = () => {
    setIsOpen(true);
    console.log('Is Open:', setOpen);
  };

  const cont = ( 
        <div style ={{
          display: 'flex',
          flexDirection: 'column',
        }}>
            <Text
            strong
            style ={{ padding: '12px 20px'}}        
            >
              {user?.name}
            </Text>
            <div
              style ={{ 
                borderTop: '1px solid #d9d9d9d',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}            
            >
              <Button
                style ={{ textAlign: 'left'}}
                icon = {<SettingOutlined />} 
                type = "text"
                block
                onClick = {handleButtonClick}
    
              >
                Account Settings 
              </Button>
            </div>
        </div>
      );

  return (
    <>
    <Popover
      content={cont}
      trigger="click"
      open={open}
      overlayInnerStyle={{padding:0}}
      overlayStyle ={{ zindex: 999 }}
      onOpenChange={handleOpenChange}
    >
      {/* <Button 
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          width:'2rem',
          borderRadius: 'rounded-full'

        }}
      > */}
      <CustomAvatar  
              name = {user?.name}
              src = {user?.avatarUrl}
              size="default"
              style={{ cursor: 'pointer' }}
              

              />
      {/* </Button> */}
    </Popover>

    {user && (
    < AccountSettings
        opened={isOpen}
        setOpened={setIsOpen}
        userId={user.id}
    />
  )}
  </>
  );
};

// export default CurrentUser;