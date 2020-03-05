import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormat7Pipe implements PipeTransform {

  transform(value) {
   
    var date_return = value.split('-',3);

    var day = date_return[2] ;
    var month = date_return[1];
    var year = date_return[0]

    var m ;
    var y = parseInt(year)+543;
  

    

    switch(month){
      case "01" : 
      m = "ม.ค." ;
      break;
      case "02" :
        m = "ก.พ." ;
        break ;
        case "03" :
          m = "มี.ค." ;
          break ;
          case "04" :
            m = "เม.ย." ;
            break ;
            case "05" :
              m = "พ.ค." ;
              break ;
              case "06" :
                m = "มิ.ย." ;
                break ;
                case "07" :
                  m = "ก.ค. " ;
                  break ;
                  case "08" :
                    m = "ส.ค." ;
                    break ;
                    case "09" :
                      m = "ก.ย." ;
                      break ;
                      case "10" :
                        m = "ต.ค." ;
                        break ;
                        case "11" :
                          m = "พ.ย." ;
                          break ;
                          case "12" :
                            m = "ธ.ค." ;
                            break ;
    }

    var result = day+" "+m+" "+y ;

    return result;
  }

}
