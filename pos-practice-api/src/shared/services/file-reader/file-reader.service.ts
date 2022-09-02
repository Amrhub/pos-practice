import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { TestData, TestDataKeys, ValuesOfTestData } from './dto/testData.dto';

@Injectable()
export class FileReaderService {
  readTestData(objectKey: TestDataKeys | 'all', encoding: BufferEncoding = 'utf8'): TestData | ValuesOfTestData {
    try {
      const data = fs.readFileSync('src/shared/files/TestData.json', encoding);
      const object = JSON.parse(data);
      return objectKey === 'all' ? object : object[objectKey];
    } catch {
      throw new NotFoundException('Could not find TestData.json');
    }
  }
}
