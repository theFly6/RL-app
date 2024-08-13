// 当前整个模块: API进行统一管理
import axios from './axios'
// import requestsA  from './axios'
// import requestsB  from './axios'
import { requestsA, requestsB } from './axios'

// 用户登录
export const reqUserLogin = (data) => requestsA.post('/user/login', data)
// 获取用户基本信息
export const reqGetUserInfo = ({ user_id }) => requestsA.get(`/user/getuserinfo/${user_id}`)
// 修改密码
export const reqUpdatePwd = (data) => requestsA.post('/user/updatepwd', data)
// 设置邮箱
export const reqSetEmail = (data) => requestsA.post('/user/setemail', data)
// 发送问题反馈
export const reqSendFeedback = (data) => requestsA.post('/user/sendfeedback', data)


// 后台管理
// 添加用户
export const reqAddUser = (data) => requestsA.post('/back/user/adduser', data)

// 获取用户列表
export const reqGetUserList = (data) => requestsA.post('/back/user/getuserlist', data)

// 修改用户信息
export const reqBackUpdateUserInfo = (data) => requestsA.post('/back/user/updateuserinfo', data)

// 封禁用户
export const reqDelUser = ({ user_id }) => requestsA.get(`/back/user/deluser/${user_id}`)

// 添加座位
export const reqAddSeat = (data) => requestsA.post('/back/seat/addseat', data)

// 获取座位列表
export const reqGetSeatList = (data) => requestsA.post('/back/seat/getseatlist', data)

// 修改座位信息
export const reqBackUpdateSeatInfo = (data) => requestsA.post('/back/seat/updateseatinfo', data)

// 移除座位
export const reqDelSeat = ({ seat_id }) => requestsA.get(`/back/seat/delseat/${seat_id}`)

// 发布通知
export const reqAddNotice = (data) => requestsA.post('/back/notice/addnotice', data)

// 获取通知列表
export const reqGetNoticeList = (data) => requestsA.post('/back/notice/getnoticelist', data)

// 删除通知
export const reqDelNotice = ({ notice_id }) => requestsA.get(`/back/notice/delnotice/${notice_id}`)

// 获取预约信息列表
export const reqGetReserveList = (data) => requestsA.post('/back/reserve/getreservelist')

// 根据id删除超时的预约信息
export const reqDelReserve = ({ reserve_id, seat_id }) => requestsA.get(`/back/reserve/delreserve/${reserve_id}/${seat_id}`)

// 清空超时记录
export const reqClearTimeoutReserve = () => requestsA.get('/back/reserve/delallreserve')







// 前台显示
// 获取通知列表
export const reqFrontGetNoticeList = ({ user_id }) => requestsA.get(`/front/notice/getnoticelist/${user_id}`)

// 设置阅读状态为已读
export const reqFrontSetRead = ({ user_id, notice_id }) => requestsA.post(`/front/notice/set_read/${user_id}/${notice_id}`)

// 设置该用户的所有通知为已读
export const reqFrontAllSetRead = ({ user_id }) => requestsA.get(`/front/notice/all_set_read/${user_id}`)

// 获取座位列表
export const reqFrontGetSeatList = ({ seat_floor }) => requestsA.get(`/front/seat/getseatlist/${seat_floor}`)

// 预约座位
export const reqFrontReserveSeat = (data) => requestsA.post('/front/reserve/reserveseat')

// 获取预约信息
export const reqFrontGetReserveInfo = ({ user_id }) => requestsA.get(`/front/reserve/getreserveinfo/${user_id}`)

// 离开座位
export const reqFrontLeaveSeat = ({ user_id, seat_id }) => requestsA.get(`/front/reserve/leaveseat/${user_id}/${seat_id}`)
//添加实验
export const reqAddTest = (data) => requestsA.post('/front/test/addtest', data)
// 获取实验列表
export const reqGetTestList = (data) => requestsA.post('/front/test/gettestlist', data)
// 修改实验信息
export const reqUpdateTestInfo = (data) => requestsA.post('/front/test/updatetestinfo', data)

// 获取实验数据
export const reqGetEchartsList = (data) => requestsA.post('/front/echarts/getechartslist', data)
// 获取实验详情列表（根据id获取当前实验的各个子实验）
export const reqGetTestDetail = (data) => requestsA.post('/front/test/gettestDetail', data)

// 超参数推荐
export const reqEvaluateTest = (data) => requestsB.post('/parameters',data)

