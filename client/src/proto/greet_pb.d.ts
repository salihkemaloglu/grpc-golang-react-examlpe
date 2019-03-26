// package: blog
// file: proto/greet.proto

import * as jspb from "google-protobuf";

export class Blog extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    id: string,
    authorId: string,
    title: string,
    content: string,
  }
}

export class Story extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getBy(): string;
  setBy(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Story.AsObject;
  static toObject(includeInstance: boolean, msg: Story): Story.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Story, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Story;
  static deserializeBinaryFromReader(message: Story, reader: jspb.BinaryReader): Story;
}

export namespace Story {
  export type AsObject = {
    id: number,
    score: number,
    title: string,
    by: string,
    time: number,
    url: string,
  }
}

export class CreateBlogRequest extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogRequest): CreateBlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogRequest;
  static deserializeBinaryFromReader(message: CreateBlogRequest, reader: jspb.BinaryReader): CreateBlogRequest;
}

export namespace CreateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class CreateBlogResponse extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBlogResponse): CreateBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBlogResponse;
  static deserializeBinaryFromReader(message: CreateBlogResponse, reader: jspb.BinaryReader): CreateBlogResponse;
}

export namespace CreateBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class ReadBlogRequest extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadBlogRequest): ReadBlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadBlogRequest;
  static deserializeBinaryFromReader(message: ReadBlogRequest, reader: jspb.BinaryReader): ReadBlogRequest;
}

export namespace ReadBlogRequest {
  export type AsObject = {
    blogId: string,
  }
}

export class ReadBlogResponse extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadBlogResponse): ReadBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadBlogResponse;
  static deserializeBinaryFromReader(message: ReadBlogResponse, reader: jspb.BinaryReader): ReadBlogResponse;
}

export namespace ReadBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class UpdateBlogRequest extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogRequest): UpdateBlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogRequest;
  static deserializeBinaryFromReader(message: UpdateBlogRequest, reader: jspb.BinaryReader): UpdateBlogRequest;
}

export namespace UpdateBlogRequest {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class UpdateBlogResponse extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBlogResponse): UpdateBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBlogResponse;
  static deserializeBinaryFromReader(message: UpdateBlogResponse, reader: jspb.BinaryReader): UpdateBlogResponse;
}

export namespace UpdateBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class DeleteBlogRequest extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogRequest): DeleteBlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogRequest;
  static deserializeBinaryFromReader(message: DeleteBlogRequest, reader: jspb.BinaryReader): DeleteBlogRequest;
}

export namespace DeleteBlogRequest {
  export type AsObject = {
    blogId: string,
  }
}

export class DeleteBlogResponse extends jspb.Message {
  getBlogId(): string;
  setBlogId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlogResponse): DeleteBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlogResponse;
  static deserializeBinaryFromReader(message: DeleteBlogResponse, reader: jspb.BinaryReader): DeleteBlogResponse;
}

export namespace DeleteBlogResponse {
  export type AsObject = {
    blogId: string,
  }
}

export class ListBlogRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogRequest): ListBlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogRequest;
  static deserializeBinaryFromReader(message: ListBlogRequest, reader: jspb.BinaryReader): ListBlogRequest;
}

export namespace ListBlogRequest {
  export type AsObject = {
  }
}

export class ListBlogResponse extends jspb.Message {
  hasBlog(): boolean;
  clearBlog(): void;
  getBlog(): Blog | undefined;
  setBlog(value?: Blog): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlogResponse): ListBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlogResponse;
  static deserializeBinaryFromReader(message: ListBlogResponse, reader: jspb.BinaryReader): ListBlogResponse;
}

export namespace ListBlogResponse {
  export type AsObject = {
    blog?: Blog.AsObject,
  }
}

export class Chunk extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

export class UploadStatus extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getCode(): UploadStatusCode;
  setCode(value: UploadStatusCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadStatus.AsObject;
  static toObject(includeInstance: boolean, msg: UploadStatus): UploadStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadStatus;
  static deserializeBinaryFromReader(message: UploadStatus, reader: jspb.BinaryReader): UploadStatus;
}

export namespace UploadStatus {
  export type AsObject = {
    message: string,
    code: UploadStatusCode,
  }
}

export class LongGreetRequest extends jspb.Message {
  getGreeting(): Uint8Array | string;
  getGreeting_asU8(): Uint8Array;
  getGreeting_asB64(): string;
  setGreeting(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetRequest): LongGreetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongGreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetRequest;
  static deserializeBinaryFromReader(message: LongGreetRequest, reader: jspb.BinaryReader): LongGreetRequest;
}

export namespace LongGreetRequest {
  export type AsObject = {
    greeting: Uint8Array | string,
  }
}

export class LongGreetResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongGreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LongGreetResponse): LongGreetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LongGreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongGreetResponse;
  static deserializeBinaryFromReader(message: LongGreetResponse, reader: jspb.BinaryReader): LongGreetResponse;
}

export namespace LongGreetResponse {
  export type AsObject = {
    result: string,
  }
}

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export enum UploadStatusCode {
  Unknown = 0,
  Ok = 1,
  Failed = 2,
}

