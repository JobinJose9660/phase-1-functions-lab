function distanceFromHqInBlocks(x)
{ 
    const n = 42;
    let dist = x - n;
    return Math.abs(dist)


}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(x)
{
    let dist = distanceFromHqInBlocks(x)
    return dist*264
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
function distanceTravelledInFeet(start, destination)
{
   
    let dist = Math.abs((destination - start))*264
    return dist
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)
function calculatesFarePrice(start, destination)
{     let dist
    if (distanceTravelledInFeet(start,destination)<=400)
    {  
        return dist =0

    }
    else if((distanceTravelledInFeet(start,destination))>400&&(distanceTravelledInFeet(start,destination))<=2000){
        return dist = 2.56
    }
    else if((distanceTravelledInFeet(start,destination))>2000&&(distanceTravelledInFeet(start,destination))<2500){
        return dist = 25
    }
    else if (distanceTravelledInFeet(start,destination)>=2500){
        return dist = "cannot travel that far"
    }
    
}