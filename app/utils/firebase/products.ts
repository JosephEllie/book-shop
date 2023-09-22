"use client";
import { app } from "@/firebase";
import {
  DocumentData,
  QuerySnapshot,
  onSnapshot,
  where,
} from "firebase/firestore";
import { F_DB } from "./database";
import _ from "lodash"

export class Products extends F_DB {
  constructor() {
    super(app, "products");
  }

  async addListener(onDone: (snapshot: QuerySnapshot<DocumentData>) => void) {
    let docRef = this.getCollectionRef();
    if (docRef) {
      onSnapshot(docRef, onDone);
    }
  }

  async saveProductData(data: any) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.addToDocumentCollection({
      docId: data.objectId,
      data: _data,
    });
  }

  async getProductById(productId?: string) {
    return this.getDocumentDataByCondition({
      conditions: productId ? [where("objectId", "==", productId)] : [],
    }).then((snap) => {
      if (!snap?.empty) {
        return snap?.docs.map((doc) => {
          return doc.data() as any;
        })[0];
      } else {
        return null;
      }
    });
  }

  // async getUsersProductsByLimit({
  //   userId,
  //   page,
  // }: {
  //   userId?: string;
  //   page: number;
  // }) {
  //   return this.getPageDocumentDataByCondition({
  //     conditions: userId ? [where("ownersId", "==", userId)] : [],
  //     page,
  //   }).then((snap) => {
  //     if (!snap?.empty) {
  //       return snap?.docs.map((doc) => {
  //         return doc.data() as AppProduct;
  //       });
  //     } else {
  //       return null;
  //     }
  //   });
  // }

  async getUsersAllProducts(usersId?: string) {
    return this.getDocumentDataByCondition({
      conditions: usersId ? [where("ownersId", "==", usersId)] : [],
    }).then((snap) => {
      if (!snap?.empty) {
        return snap?.docs.map((doc) => {
          return doc.data() as any;
        });
      } else {
        return null;
      }
    });
  }
}
