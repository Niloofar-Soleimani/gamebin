import { Injectable } from '@angular/core';


 interface IModal {
   id: string;
   visible: boolean;
 }
@Injectable({
  providedIn: 'root',
})
export class ModalService {
private modal:IModal[]=[]
  constructor() {}


  register(id:string){
    this.modal.push({id,visible:false})
  }
  unregister(id:string){
    this.modal = this.modal.filter(elem=>elem.id!==id)
  }
  
  isModalOpen(id:string) :boolean{
    return !!this.modal.find(elem=>elem.id===id)?.visible;
  }
  showModal(id:string) {

  }
  toggleModal(id:string) {
   const modal = this.modal.find((elem) => elem.id === id)
if(modal){
  modal.visible = !modal.visible;
}
  }
}
