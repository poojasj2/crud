import { EntityMetadataMap } from "@ngrx/data";
import { CarDetails } from "./car-detail";
 
export const carEntityMetaData: EntityMetadataMap = {
    CarDetail:{
        selectId:(carDetail:CarDetails)=>carDetail.id,
      }
}