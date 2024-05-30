import Styles from './UserPlace.module.css'

export const UserPlace = () =>{

    return(
        <>
        <div className={Styles["userInfo"]}>
            <img src='/images/vector.webp' className={Styles["avatar"]}/>
            <div className={Styles["userTextInfo"]}>
                <h2 className={Styles["info"]}>UserName</h2>
                <p className={Styles["info"]}> Работа не волк, волк - это ходить, работа - это work</p>
                <h3 className={Styles["info"]}> Игры: </h3>
                <div className={Styles["GamesOfUser"]}>
                    <p className={Styles["emptyness"]}> Пользователь еще не сделал(а) ни одной игры </p>
                </div>
            </div>
        </div>
        </>
    );
}