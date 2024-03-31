import Banner from "../components/main/Banner";
import Profile from "../components/main/Profile";
import Projects from "../components/main/Projects";
import Tools from "../components/main/Tools";
import styles from "../styles/main/Main.module.css"

const Main = () => {
    return ( 
        <div className={styles.page}>
            <Banner/>
            <Profile/>
            <Tools/>
            <Projects/>
        </div>
     );
}
 
export default Main;