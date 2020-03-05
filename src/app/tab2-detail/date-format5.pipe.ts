import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormat5Pipe implements PipeTransform {

  transform(value) {
   
    var date_return = value.split('-',3);

    var day = date_return[2] ;
    var month = date_return[1];
    var year = date_return[0]

    var m ;
    var y = parseInt(year)+543;
  

    

    switch(month){
      case "01" : 
      m = "มกราคม" ;
      break;
      case "02" :
        m = "กุมภาพันธ์" ;
        break ;
        case "03" :
          m = "มีนาคม" ;
          break ;
          case "04" :
            m = "เมษายน" ;
            break ;
            case "05" :
              m = "พฤษภาคม" ;
              break ;
              case "06" :
                m = "มิถุนายน" ;
                break ;
                case "07" :
                  m = "กรกฎาคม " ;
                  break ;
                  case "08" :
                    m = "สิงหาคม" ;
                    break ;
                    case "09" :
                      m = "กันยายน" ;
                      break ;
                      case "10" :
                        m = "ตุลาคม" ;
                        break ;
                        case "11" :
                          m = "พฤศจิกายน" ;
                          break ;
                          case "12" :
                            m = "ธันวาคม" ;
                            break ;
    }

    var result = day+" "+m+" "+y ;

    return result;
  }

}
