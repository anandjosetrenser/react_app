import { StudyDataApiResponse } from '../../pages/studyList/interface'
import metadataAPI from '../api/metadataAPI'

// const studyList :StudyDataApiResponse = {
//     "result": [
//         {
//             "meta_store_id": "43cfde28-8f7e-483c-87ce-38a9443b9b8b",
//             "createAt": 1673428491764,
//             "data": {
//                 "00100040": {
//                     "vr": "CS"
//                 },
//                 "0020000D": {
//                     "vr": "UI",
//                     "Value": [
//                         "1.3.6.1.4.1.14519.5.2.1.7311.5101.158323547117540061132729905711"
//                     ]
//                 },
//                 "00100010": {
//                     "vr": "PN"
//                 },
//                 "00100020": {
//                     "vr": "LO"
//                 },
//                 "00100030": {
//                     "vr": "DA"
//                 },
//                 "00200010": {
//                     "vr": "SH"
//                 },
//                 "00090010": {
//                     "Value": [
//                         "dedupped"
//                     ],
//                     "vr": "CS"
//                 },
//                 "00091011": {
//                     "Value": [
//                         "aad207117c9ea6663f4c6246f7de5d360025400da3e7710e43d2c7a3d0c68134"
//                     ]
//                 },
//                 "00091012": {
//                     "Value": [
//                         "study"
//                     ]
//                 },
//                 "00080020": {
//                     "vr": "DA"
//                 },
//                 "00080030": {
//                     "vr": "TM"
//                 },
//                 "00080050": {
//                     "vr": "SH"
//                 },
//                 "00080061": {
//                     "Value": [
//                         "SR",
//                         "MR"
//                     ],
//                     "vr": "CS"
//                 },
//                 "00201206": {
//                     "Value": [
//                         7
//                     ],
//                     "vr": "IS"
//                 },
//                 "00201208": {
//                     "Value": [
//                         149
//                     ],
//                     "vr": "IS"
//                 }
//             }
//         },
//         {
//             "meta_store_id": "024df27c-f1d4-4f97-8c20-54e149c47a33",
//             "createAt": 1673428471669,
//             "data": {
//                 "00100040": {
//                     "vr": "CS",
//                     "Value": [
//                         "F"
//                     ]
//                 },
//                 "0020000D": {
//                     "vr": "UI",
//                     "Value": [
//                         "1.3.6.1.4.1.14519.5.2.1.3023.4024.215308722288168917637555384485"
//                     ]
//                 },
//                 "00100010": {
//                     "vr": "PN",
//                     "Value": [
//                         {
//                             "Alphabetic": "TCGA-QQ-A8VH"
//                         }
//                     ]
//                 },
//                 "00120062": {
//                     "vr": "CS",
//                     "Value": [
//                         "YES"
//                     ]
//                 },
//                 "00100020": {
//                     "vr": "LO",
//                     "Value": [
//                         "TCGA-QQ-A8VH"
//                     ]
//                 },
//                 "00100030": {
//                     "vr": "DA"
//                 },
//                 "00120064": {
//                     "vr": "SQ",
//                     "Value": [
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113100"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Basic Application Confidentiality Profile"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113101"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Clean Pixel Data Option"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113105"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Clean Descriptors Option"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113107"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Retain Longitudinal With Modified Dates Option"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113108"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Retain Patient Characteristics Option"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113109"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Retain Device Identity Option"
//                                 ]
//                             }
//                         },
//                         {
//                             "00080102": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "DCM"
//                                 ]
//                             },
//                             "00080100": {
//                                 "vr": "SH",
//                                 "Value": [
//                                     "113111"
//                                 ]
//                             },
//                             "00080104": {
//                                 "vr": "LO",
//                                 "Value": [
//                                     "Retain Safe Private Option"
//                                 ]
//                             }
//                         }
//                     ]
//                 },
//                 "00200010": {
//                     "vr": "SH"
//                 },
//                 "00090010": {
//                     "Value": [
//                         "dedupped"
//                     ],
//                     "vr": "CS"
//                 },
//                 "00091011": {
//                     "Value": [
//                         "05b5579f6eee4935e11f3e95647a24faa7a36ace0534103055886b5e131ed33c"
//                     ]
//                 },
//                 "00091012": {
//                     "Value": [
//                         "study"
//                     ]
//                 },
//                 "00080020": {
//                     "vr": "DA",
//                     "Value": [
//                         "20020315"
//                     ]
//                 },
//                 "00080030": {
//                     "vr": "TM",
//                     "Value": [
//                         "164841.000000"
//                     ]
//                 },
//                 "00080050": {
//                     "vr": "SH",
//                     "Value": [
//                         "1126068487756231"
//                     ]
//                 },
//                 "00080061": {
//                     "Value": [
//                         "MR"
//                     ],
//                     "vr": "CS"
//                 },
//                 "00201206": {
//                     "Value": [
//                         8
//                     ],
//                     "vr": "IS"
//                 },
//                 "00201208": {
//                     "Value": [
//                         214
//                     ],
//                     "vr": "IS"
//                 },
//                 "00081030": {
//                     "vr": "LO",
//                     "Value": [
//                         "MRI THORACIC W/WO CONTRAST"
//                     ]
//                 }
//             }
//         }
//     ]
// };

export default async function fetchStudyList(queryParam: Record<string, any>) {
  return await new Promise<{ data: StudyDataApiResponse; count: number }>(
    (resolve, reject) => {
      console.log('queryParam', queryParam)
      // setTimeout(() => {
      metadataAPI
        .request('metadata/instance')
        .setQueryParam(queryParam)
        .get()
        .then(studyList => {
          metadataAPI
            .request('metadata/instance/count')
            .setQueryParam(queryParam)
            .get()
            .then(countInfo => {
              resolve({ data: studyList, count: countInfo.count })
            })
            .catch(() => {})
        })
        .catch(() => {})
      //   resolve({data: studyList })
      // }, 1000)
    }
  )
}
