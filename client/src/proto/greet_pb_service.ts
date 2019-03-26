// package: blog
// file: proto/greet.proto

import * as proto_greet_pb from "../proto/greet_pb";
export class BlogService {
  static serviceName = "blog.BlogService";
}
export namespace BlogService {
  export class CreateBlog {
    static readonly methodName = "CreateBlog";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.CreateBlogRequest;
    static readonly responseType = proto_greet_pb.CreateBlogResponse;
  }
  export class ReadBlog {
    static readonly methodName = "ReadBlog";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.ReadBlogRequest;
    static readonly responseType = proto_greet_pb.ReadBlogResponse;
  }
  export class UpdateBlog {
    static readonly methodName = "UpdateBlog";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.UpdateBlogRequest;
    static readonly responseType = proto_greet_pb.UpdateBlogResponse;
  }
  export class DeleteBlog {
    static readonly methodName = "DeleteBlog";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.DeleteBlogRequest;
    static readonly responseType = proto_greet_pb.DeleteBlogResponse;
  }
  export class ListBlog {
    static readonly methodName = "ListBlog";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_greet_pb.ListBlogRequest;
    static readonly responseType = proto_greet_pb.ListBlogResponse;
  }
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = BlogService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.HelloRequest;
    static readonly responseType = proto_greet_pb.HelloResponse;
  }
  export class LongGreet {
    static readonly methodName = "LongGreet";
    static readonly service = BlogService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.LongGreetRequest;
    static readonly responseType = proto_greet_pb.LongGreetResponse;
  }
  export class Upload {
    static readonly methodName = "Upload";
    static readonly service = BlogService;
    static readonly requestStream = true;
    static readonly responseStream = false;
    static readonly requestType = proto_greet_pb.Chunk;
    static readonly responseType = proto_greet_pb.UploadStatus;
  }
}
