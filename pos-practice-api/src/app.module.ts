import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileReaderService } from './shared/services/file-reader/file-reader.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FileReaderService],
})
export class AppModule {}
