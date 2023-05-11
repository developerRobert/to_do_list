
function tiempo() {
    let fecha=new Date();
    let  hora= fecha.getHours();
    let ampm;
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();
    let  diaSemanas=fecha.getDay();
    let dia=fecha.getDate();
    let mes=fecha.getMonth();
    let ano=fecha.getFullYear();
    //  console.log(diaSemanas)

    const vista_semana=document.querySelector(".vista_dia_semana");
    const vista_mes=document.querySelector(".vista_mes");
    const vista_anos=document.querySelector(".vista_ano");
    const vista_horas=document.querySelector(".vista_hora");
    const vista_minutos_p=document.querySelector(".vista_minutos");
    const vista_segundos_P=document.querySelector(".vista_segundos");
    const vista_ampm_p=document.querySelector(".vista_ampm");
    const vista_dia=document.querySelector(".vista_dia");
    
    
    

    const arraySemanas=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const arrayMeses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    
    vista_semana.textContent=arraySemanas[diaSemanas];
    vista_dia.textContent=dia;
    vista_mes.textContent=arrayMeses[mes];
    vista_anos.textContent=ano; 
    
    // ______________________________________

    if (hora >= 12) {
        hora = hora -12
        ampm = "PM"
    }else{
        ampm= "Am"
    };

    if (hora == 0) {
        hora = 12; 
    };

    if (minutos < 10) {
        minutos= "0" + minutos    
    };
    if (segundos < 10) {
        segundos= "0" +segundos 
    };
    if (hora < 10) {
        hora= "0" + hora   
    };
    
    vista_horas.textContent=hora;
    vista_minutos_p.textContent=minutos;
    vista_segundos_P.textContent=segundos;
    vista_ampm_p.textContent=ampm;

    
    
}
tiempo();
let inter= setInterval(tiempo,1000)