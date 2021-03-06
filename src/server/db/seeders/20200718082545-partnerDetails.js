"use strict";

const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "partnerDetails",
      [
        {
          partnerId: 1,
          name: "wtjgln",
          gender: 1,
          age: 26,
          phoneNumber: "01028349828",
          url: "gexjnphvxzqkteb.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "불안",
          level: 3,
          certificate: 3,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 3,
          name: "aumyyb",
          gender: 2,
          age: 26,
          phoneNumber: "01074635435",
          url: "tgnnficizbqfpek.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 3,
          certificate: 2,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 5,
          name: "hijmej",
          gender: 2,
          age: 26,
          phoneNumber: "01032316303",
          url: "udqkfnilkfqnume.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 2,
          certificate: 2,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 7,
          name: "axinki",
          gender: 2,
          age: 26,
          phoneNumber: "01014860549",
          url: "naeyepspogdcmkq.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "불안",
          level: 3,
          certificate: 2,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 9,
          name: "cofztb",
          gender: 1,
          age: 26,
          phoneNumber: "01027475779",
          url: "tiruwwksdqaydgb.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 1,
          certificate: 2,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 11,
          name: "qsxhwm",
          gender: 1,
          age: 26,
          phoneNumber: "01036244936",
          url: "siyukzoyewhdvvy.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "우울",
          level: 1,
          certificate: 1,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 13,
          name: "llysau",
          gender: 1,
          age: 26,
          phoneNumber: "01031303355",
          url: "owqowgqrajoyxwk.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "우울",
          level: 2,
          certificate: 1,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 15,
          name: "kwtjim",
          gender: 1,
          age: 26,
          phoneNumber: "01014511265",
          url: "zxttzepdemfypmz.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "우울",
          level: 3,
          certificate: 1,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 17,
          name: "olspxo",
          gender: 2,
          age: 26,
          phoneNumber: "01053962799",
          url: "pcespvmzxxilftz.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 2,
          certificate: 3,
          image: "image",
          evaluate: 0,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 19,
          name: "olspxo",
          gender: 2,
          age: 26,
          phoneNumber: "01053962799",
          url: "pcespvmzxxilftz.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 2,
          certificate: 3,
          image: "image",
          evaluate: 1,
          createdAt,
          updatedAt,
        },
        {
          partnerId: 21,
          name: "olspxo",
          gender: 2,
          age: 26,
          phoneNumber: "01053962799",
          url: "pcespvmzxxilftz.youtube.com",
          shortInfo: "shortInfo",
          career: "career",
          info: "info",
          chatCost: 50000,
          keyword: "취업",
          level: 2,
          certificate: 3,
          image: "image",
          evaluate: 1,
          createdAt,
          updatedAt,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("partnerDetails", null, {});
  },
};
