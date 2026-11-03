import classes from "./Main.module.css"

const Main = () => {
  return (
    <div className="section line-dark-section"> 
      <div className="container">
        <div className={classes.content}>
          <h1 className="h1">Weissgauff</h1>
          <h2 className="text-base">качество доступное каждому</h2>
        </div>
      </div>
    </div>
  )
}

export default Main;