import { expire, setExpire, getExpire } from './storage'

/**
 * 存储account到本地, 有效期为15天
 * @params String {value} 值
 */
export const setAccount = (account) => {
    setExpire('RL-ACCOUNT', account, expire * 15)
}

/**
 * 获取本地存储的account, 不存在则返回null
 * @returns String {value} 值
 */
export const getAccount = () => {
    return getExpire('RL-ACCOUNT')
}

/**
 * 清除本地存储的account
 */
export const removeAccount = () => {
    localStorage.removeItem('RL-ACCOUNT')
}