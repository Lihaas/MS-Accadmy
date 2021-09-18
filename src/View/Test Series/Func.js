export const radio = (e) => {
    for (let i = 0; i < 2; i++) {
      document.getElementById(
        document.getElementsByName("payment")[i].value
      ).style.display = "none";
      document.getElementById(i).style.height = "50vh";
      document.getElementById(i).style.backgroundColor = "#FFF";
      document.getElementById(i).style.color = "#009edb";
      if (e.target.value === document.getElementsByName("payment")[i].value) {
        document.getElementById(e.target.value).style.display = "block";
        document.getElementById(i).style.height = "80vh";
        document.getElementById(i).style.backgroundColor = "#009edb";
        document.getElementById(i).style.color = "#000";
      }
    }
  };

    export const coupon = (price,setPrice) => {
    if (price === false) {
      setPrice(true);
      document.getElementById("price").style.textDecoration = "line-through";
      document.getElementById("price1").style.textDecoration = "line-through";
      document.getElementById("couponBox").value = "NEWUSER";
      document.getElementById("couponBox1").value = "NEWUSER";
      document.getElementById("couponCode").checked = true;
      document.getElementById("couponCode1").checked = true;
    } else {
      setPrice(false);
      document.getElementById("couponCode").checked = false;
      document.getElementById("couponCode1").checked = false;
      document.getElementById("price").style.textDecoration = "none";
      document.getElementById("price1").style.textDecoration = "none";
      document.getElementById("couponBox").value = "";
      document.getElementById("couponBox1").value = "";
    }
  };