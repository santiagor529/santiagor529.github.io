function change()
{
    var div = document.getElementById("Description");
    var map = document.getElementById("Map")

  if(document.getElementById("London").checked)
  {
      document.getElementById("landmark").src="Images/big-ben.jpg"
     div.innerHTML="Big ben is the nickname of a big clock tower in London, England, it was opened on May 31, 1859."
     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.680381439027!2d-0.12681408407514735!3d51.500732519011436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2sus!4v1633313804865!5m2!1sen!2sus"
  }
  else if(document.getElementById("Rome").checked)
  {
      document.getElementById("landmark").src="Images/Colosseum.jpg"
      div.innerHTML = "The Colosseum is the largest ancient amphitheatre ever built. It opened in 80AD in Rome, Italy."
      map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.122888131329!2d12.490042215682005!3d41.890214172634636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sus!4v1633312908427!5m2!1sen!2sus"
  }
  else if(document.getElementById("Australia").checked)
  {
      document.getElementById("landmark").src="Images/Sydney-Opera-House-Port-Jackson.jpg"
     div.innerHTML="The Sydney Opera House started construction on March 2, 1959 and opened on October 20, 1973 in Sydney, Australia."
     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.275896420007!2d151.21310801574495!3d-33.856779925867535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sus!4v1633314050390!5m2!1sen!2sus"
  };
}

function resize()
{
    var size = document.getElementById("sizes").value;
    var image = document.getElementById("landmark");

    if(size == "Small")
    {
        image.width="300";
    }
    else if(size == "Medium")
    {
        image.width="500";
    }
    else if(size == "Large")
    {
        image.width="1000";
    }
}