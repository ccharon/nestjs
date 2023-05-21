import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  private listMessages() {

  }

  @Post()
  private createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  private getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
