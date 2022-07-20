import { createContext, useState } from "react";

// 创建 Context, as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider is the actual component
/**
 * 创建的每一个上下文中， 都有一个`.Provider` ，这个 provider 就是包裹需要访问
 * 需要访问内部值的任何其他组件
 *
 *
 * */

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
/**
 * 这样，任何被包裹的组件，都能够访问并set currentUser 这个数据对象
 */
