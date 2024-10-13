const input = document.getElementById('date');
const today = new Date().toISOString().split("T")[0]
input.max = today;

const calculateBtn = document.getElementById("cal-btn");
calculateBtn.addEventListener("click", () => {
    // Birth date
    let birthDate = new Date(input.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // Current date
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Difference
    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
        
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    document.getElementById("years").innerHTML = y3;
    document.getElementById("months").innerHTML = m3;
    document.getElementById("days").innerHTML = d3;


    document.getElementById('display').style.display = "inline"
    document.getElementById("years").style.display = 'inline'
    document.getElementById("days").style.display = 'inline'
    document.getElementById("months").style.display = 'inline'
    
});

function getDaysInMonth(year, month) {

  return new Date(year, month, 0).getDate();
}

