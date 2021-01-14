function increaseBattery() {
    if(counter < 3){
        counter = counter + 1;
    }
    if(counter == 0){
        batteryLevel.classList.add("emptyBattery");
        charge.innerHTML = " Battery is empty";
    }else if(counter==1){
        batteryLevel.classList.remove("emptyBattery");
        batteryLevel.classList.add("lowerMiddleBattery");
        charge.innerHTML = " Battery is %33 charged.";
    }else if(counter==2){
        batteryLevel.classList.remove("lowerMiddleBattery");
        batteryLevel.classList.add("upperMiddleBattery");
        charge.innerHTML = "Battery is %66 charged.";

    }else{
        batteryLevel.classList.remove("upperMiddleBattery");
        batteryLevel.classList.add("fullBattery");
        charge.innerHTML = "Battery is %100 charged.";

    }
    return;
}

function decreaseBattery() {
    if(counter > 0){
        counter = counter - 1;
    }
    if(counter == 3){
        batteryLevel.classList.add("fullBattery");
    }else if(counter == 2){
        batteryLevel.classList.remove("fullBattery");
        batteryLevel.classList.add("upperMiddleBattery");
        charge.innerHTML = "Battery is %66 left charged.";
    }else if(counter == 1){
        batteryLevel.classList.remove("upperMiddleBattery");
        batteryLevel.classList.add("lowerMiddleBattery");
        charge.innerHTML = " Battery is %33 left charged.";

    }else{
        batteryLevel.classList.remove("lowerMiddleBattery");
        batteryLevel.classList.add("emptyBattery");
        charge.innerHTML = " Battery is empty";

    }
    return;
}