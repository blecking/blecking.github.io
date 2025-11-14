function add_active_state_event_listener() {
  var nav_container = document.getElementById("sidenav");
  var nav_items = nav_container.getElementsByTagName("a");
  
  for (var i = 0; i < nav_items.length; i++) {
    nav_items[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
