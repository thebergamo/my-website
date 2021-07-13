import * as config from './config'
import { ExtendedRecordMap2, PageBlock } from './types'

export const getSocialImageUrl = (
  block: PageBlock,
  recordMap: ExtendedRecordMap2
) => {
  if (block.format?.page_cover) {
    return block.format?.page_cover
  }

  if (Object.keys(recordMap.preview_images).length) {
    return Object.keys(recordMap.preview_images)[0]
  }

  return config.defaultPageCover
}
