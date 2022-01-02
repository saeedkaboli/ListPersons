import React from "react";
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import Swal from "../node_modules/sweetalert2/dist/sweetalert2";
import Footer from "./Component/Footer/Footer";
import SimpleContext from './Context/Context';


class App extends React.Component {
  state = {
    HeaderTitle: " لیست اشخاص به صورت کلاس کامپوننت",
    Hide: true,
    Data: [],
  };
  // -------------------------  Function Adding.....
  HandlerAdding = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "عملیات با موفقیت انجام شد",
      showConfirmButton: false,
      timer: 1500,
    });
    let DataInput = document.getElementById("Input").value;
    if (DataInput === "" || isNaN(DataInput) === false) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "کاربر آتیش پاره لطفا فیلد را به درستی پر کن",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.state.Data.push({
        Fullname: `${DataInput}`,
        id: `${this.state.Data.length + 1}`,
      });
      this.setState({ Data: this.state.Data });
    }
  };
  //--------------------------Function Deleteing......
  HandlerDelete = (Even, name) => {
    const DataFilter = this.state.Data.filter((E) => E.id !== Even);
    this.setState({ Data: DataFilter });
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: `بدبخت <small>${name}</small> حذف شد `,
      showConfirmButton: false,
      timer: 1500,
    });

    //Function Changed............
  };
//---------------------------Function Changeing......
  Handlerchange = (even, id) => {
    const DataItemFined = this.state.Data.find((Item) => Item.id === id);
    DataItemFined.Fullname = even.target.value;
    this.setState({ Data: this.state.Data });
  };
//---------------------------Function Showing.....
  HandlerShow = ()=>{ 
    this.setState({Hide:!this.state.Hide})
  }
 
  render() {
    return (
      <SimpleContext.Provider value={{state:this.state.Data,HandlerAdding:this.HandlerAdding,HandlerDelete:this.HandlerDelete,Handlerchange:this.Handlerchange,HandlerShow:this.HandlerShow,Hide:this.state.Hide,Title:this.state.HeaderTitle}}>
      <div className="App">
        {/*--------------------------This is Header */}
        <Header/>
        {/*--------------------------This is Section */}
        {/* <Section> */}
        <section className="Section">
          <div className="Section-Container">
            <div className="Section-Row">
              <Section/>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      </SimpleContext.Provider>
    );
  }
}
export default App;
