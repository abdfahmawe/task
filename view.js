export class View {
  constructor() {
    this.nameElement = document.querySelector(".show-Name");
    this.genderElement = document.querySelector(".show-gender");
    this.cityElement = document.querySelector(".show-city");
    this.countryElement = document.querySelector(".show-country");
    this.streetElement = document.querySelector(".show-street");
    this.phoneElement = document.querySelector(".show-phone");
    this.emailElement = document.querySelector(".show-email");
    this.imageElement = document.querySelector(".show-image");
  }
  printdata(user) {
    this.nameElement.innerHTML = `${user.name.first} ${user.name.last}`;
    this.genderElement.innerHTML = user.gender;
    this.cityElement.innerHTML = user.location.city;
    this.countryElement.innerHTML = user.location.country;
    this.streetElement.innerHTML = `${user.location.street.number} ${user.location.street.name}`;
    this.phoneElement.innerHTML = user.phone;
    this.emailElement.innerHTML = user.email;
    this.imageElement.src = user.picture.large; // Assuming this is an img element
  }
  showFavourteList(data) {
    document.querySelector(".information-2").innerHTML = "";
    // data represent an arr of objects that i put in fovurte [ {} , {} ]

    data.forEach((element) => {
      let mainDiv = document.createElement("div");
      let div = document.createElement("div"); // div num 1
      let p1 = document.createElement("p");
      let text1 = document.createTextNode(
        ` first and last name :  ${element.name.first} ${element.name.last} `
      );
      p1.appendChild(text1);
      div.appendChild(p1);
      mainDiv.appendChild(div);
      // first data done
      let div2 = document.createElement("div"); // div num 1
      let p2 = document.createElement("p");
      let text2 = document.createTextNode(` gender :  ${element.gender} `);
      p2.appendChild(text2);
      div2.appendChild(p2);
      mainDiv.appendChild(div2);
      // second data done
      let div3 = document.createElement("div"); // div num 1
      let p3 = document.createElement("p");
      let text3 = document.createTextNode(` city :  ${element.location.city} `);
      p3.appendChild(text3);
      div3.appendChild(p3);
      mainDiv.appendChild(div3);
      //third data done
      let div4 = document.createElement("div"); // div num 1
      let p4 = document.createElement("p");
      let text4 = document.createTextNode(
        ` country :  ${element.location.country}`
      );
      p4.appendChild(text4);
      div4.appendChild(p4);
      mainDiv.appendChild(div4);
      // fourth data done
      let div5 = document.createElement("div"); // div num 1
      let p5 = document.createElement("p");
      let text5 = document.createTextNode(
        ` street name and number : ${element.location.street.number} ${element.location.street.name} `
      );
      p5.appendChild(text5);
      div5.appendChild(p5);
      mainDiv.appendChild(div5);
      // data num 5 done now 6
      let div6 = document.createElement("div"); // div num 1
      let p6 = document.createElement("p");
      let text6 = document.createTextNode(` phone :  ${element.phone} `);
      p6.appendChild(text6);
      div6.appendChild(p6);
      mainDiv.appendChild(div6);
      // now 7
      let div7 = document.createElement("div"); // div num 1
      let p7 = document.createElement("p");
      let text7 = document.createTextNode(` email :   ${element.email} `);
      p7.appendChild(text7);
      div7.appendChild(p7);
      mainDiv.appendChild(div7);
      // now egiht
      let div8 = document.createElement("div"); // div num 1
      let img = document.createElement("img");
      let p8 = document.createElement("p");
      let text8 = document.createTextNode(` image :  `);
      img.src = `${element.picture.large}`;
      p8.appendChild(text8);
      div8.appendChild(p8);
      div8.appendChild(img);
      mainDiv.appendChild(div8);
      // apend evrey user to the info div
      document.querySelector(".information-2").appendChild(mainDiv);
    });
  }
}
