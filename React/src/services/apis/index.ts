import { doList } from "./modules/todoList.api";
import { UserModule } from "./modules/user.module";
import './axios.instance'
export const api = {
    doList: doList,
    userApi: UserModule,
}