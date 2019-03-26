package main

import (
	"bytes"
	"context"
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/go-chi/chi"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	shell "github.com/ipfs/go-ipfs-api"
	"github.com/rs/cors"
	"github.com/salihkemaloglu/middleware"
	blogpb "github.com/salihkemaloglu/proto"
	"github.com/salihkemaloglu/proxy"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/grpclog"
	gomail "gopkg.in/gomail.v2"
)

//DB string
var DB string

type server struct {
}

//User string
type User struct {
	Username string `bson:"author_id"`
	Password string `bson:"content"`
	Title    string `bson:"title"`
}
type blogItem struct {
	AuthorID string `bson:"author_id"`
	Content  string `bson:"content"`
	Title    string `bson:"title"`
}

func (*server) CreateBlog(ctx context.Context, req *blogpb.CreateBlogRequest) (*blogpb.CreateBlogResponse, error) {
	fmt.Println("Create blog request")
	// blog := req.GetBlog()

	// data := blogItem{
	// 	AuthorID: blog.GetAuthorId(),
	// 	Title:    blog.GetTitle(),
	// 	Content:  blog.GetContent(),
	// }

	// res, err := collection.InsertOne(context.Background(), data)
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Internal error: %v", err),
	// 	)
	// }
	// oid, ok := res.InsertedID.(primitive.ObjectID)
	// if !ok {
	// 	return nil, status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Cannot convert to OID"),
	// 	)
	// }

	return &blogpb.CreateBlogResponse{
		Blog: &blogpb.Blog{
			// Id:       oid.Hex(),
			// AuthorId: blog.GetAuthorId(),
			// Title:    blog.GetTitle(),
			// Content:  blog.GetContent(),
		},
	}, nil

}

func (*server) ReadBlog(ctx context.Context, req *blogpb.ReadBlogRequest) (*blogpb.ReadBlogResponse, error) {
	fmt.Println("Read blog request")

	// blogID := req.GetBlogId()
	// oid, err := primitive.ObjectIDFromHex(blogID)
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.InvalidArgument,
	// 		fmt.Sprintf("Cannot parse ID"),
	// 	)
	// }

	// // create an empty struct
	// data := &blogItem{}
	// filter := bson.M{"_id": oid}

	// res := collection.FindOne(context.Background(), filter)
	// if err := res.Decode(data); err != nil {
	// 	return nil, status.Errorf(
	// 		codes.NotFound,
	// 		fmt.Sprintf("Cannot find blog with specified ID: %v", err),
	// 	)
	// }

	return &blogpb.ReadBlogResponse{
		// Blog: dataToBlogPb(data),
	}, nil
}

func dataToBlogPb(data *blogItem) *blogpb.Blog {
	return &blogpb.Blog{

		AuthorId: data.AuthorID,
		Content:  data.Content,
		Title:    data.Title,
	}
}

func (*server) UpdateBlog(ctx context.Context, req *blogpb.UpdateBlogRequest) (*blogpb.UpdateBlogResponse, error) {
	fmt.Println("Update blog request")
	// blog := req.GetBlog()
	// oid, err := primitive.ObjectIDFromHex(blog.GetId())
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.InvalidArgument,
	// 		fmt.Sprintf("Cannot parse ID"),
	// 	)
	// }

	// // create an empty struct
	// data := &blogItem{}
	// filter := bson.M{"_id": oid}

	// res := collection.FindOne(context.Background(), filter)
	// if err := res.Decode(data); err != nil {
	// 	return nil, status.Errorf(
	// 		codes.NotFound,
	// 		fmt.Sprintf("Cannot find blog with specified ID: %v", err),
	// 	)
	// }

	// // we update our internal struct
	// data.AuthorID = blog.GetAuthorId()
	// data.Content = blog.GetContent()
	// data.Title = blog.GetTitle()

	// _, updateErr := collection.ReplaceOne(context.Background(), filter, data)
	// if updateErr != nil {
	// 	return nil, status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Cannot update object in MongoDB: %v", updateErr),
	// 	)
	// }

	return &blogpb.UpdateBlogResponse{
		// Blog: dataToBlogPb(data),
	}, nil

}

func (*server) DeleteBlog(ctx context.Context, req *blogpb.DeleteBlogRequest) (*blogpb.DeleteBlogResponse, error) {
	fmt.Println("Delete blog request")
	// oid, err := primitive.ObjectIDFromHex(req.GetBlogId())
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.InvalidArgument,
	// 		fmt.Sprintf("Cannot parse ID"),
	// 	)
	// }

	// filter := bson.M{"_id": oid}

	// res, err := collection.DeleteOne(context.Background(), filter)

	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Cannot delete object in MongoDB: %v", err),
	// 	)
	// }

	// if res.DeletedCount == 0 {
	// 	return nil, status.Errorf(
	// 		codes.NotFound,
	// 		fmt.Sprintf("Cannot find blog in MongoDB: %v", err),
	// 	)
	// }

	return &blogpb.DeleteBlogResponse{BlogId: req.GetBlogId()}, nil
}

func (*server) ListBlog(req *blogpb.ListBlogRequest, stream blogpb.BlogService_ListBlogServer) error {
	fmt.Println("List blog request")

	// cur, err := collection.Find(context.Background(), bson.D{‌{}})
	// if err != nil {
	// 	return status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Unknown internal error: %v", err),
	// 	)
	// }
	// defer cur.Close(context.Background())
	// for cur.Next(context.Background()) {
	// 	data := &blogItem{}
	// 	err := cur.Decode(data)
	// 	if err != nil {
	// 		return status.Errorf(
	// 			codes.Internal,
	// 			fmt.Sprintf("Error while decoding data from MongoDB: %v", err),
	// 		)

	// 	}
	// 	stream.Send(&blogpb.ListBlogResponse{Blog: dataToBlogPb(data)})
	// }
	// if err := cur.Err(); err != nil {
	// 	return status.Errorf(
	// 		codes.Internal,
	// 		fmt.Sprintf("Unknown internal error: %v", err),
	// 	)
	// }
	return nil
}

func (s *server) SayHello(ctx context.Context, in *blogpb.HelloRequest) (*blogpb.HelloResponse, error) {
	// headers, _ := metadata.FromIncomingContext(ctx)
	// token := headers["authorization"]
	// data := User{Username: "name", Password: "pass"}
	// tok := CreateTokenEndpoint(data)
	// check, err := ValidateMiddleware(tok)
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.Unknown,
	// 		fmt.Sprintf("Unknow error %v", err),
	// 	)
	// } else if check != "ok" {
	// 	return nil, status.Errorf(
	// 		codes.Unauthenticated,
	// 		fmt.Sprintf("Authenticate err: %v", check),
	// 	)
	// }
	// fmt.Printf("received rpc from client, token=%s\n", token)
	fmt.Printf("------------------------------------------------------")
	fmt.Printf("received rpc from client, name=%s\n", in.GetName())

	// err := send(map[string]string{"username": "Conor"})
	// if err != nil {
	// 	return nil, status.Errorf(
	// 		codes.FailedPrecondition,
	// 		fmt.Sprintf(err.Error()),
	// 	)
	// }
	d := info{"jack"}

	d.sendMail()
	return &blogpb.HelloResponse{Message: "Hello " + in.Name}, nil

}

func (*server) LongGreet(stream blogpb.BlogService_LongGreetServer) error {
	fmt.Printf("LongGreet function was invoked with a streaming request\n")
	result := ""
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			// we have finished reading the client stream
			return stream.SendAndClose(&blogpb.LongGreetResponse{
				Result: result,
			})
		}
		if err != nil {
			log.Fatalf("Error while reading client stream: %v", err)
		}
		file := req.GetGreeting()
		// copy example
		absPath, _ := filepath.Abs("handlersss.jpg")
		f, err := os.OpenFile(absPath, os.O_WRONLY|os.O_CREATE, 0666)
		if err != nil {
			fmt.Println(err)

		}
		defer f.Close() //if there is a bug. If the call to os.Create fails, the function will return without closing the source file. defer is closing it.
		reader := bytes.NewReader(file)
		io.Copy(f, reader)

		//uploadToIpfs(req.GetGreeting())
		// fmt.Println(req.GetGreeting())
		//uploadToIpfs(req.GetGreeting())
		// firstName := req.GetGreeting().GetFirstName()
		// result += "Hello " + firstName + "! "
	}
}
func (s *server) Upload(stream blogpb.BlogService_UploadServer) (err error) {
	// while there are messages coming
	for {
		receive, err := stream.Recv()
		uploadToIpfs(receive.GetContent())
		if err != nil {
			if err == io.EOF {
				goto END
			}

		}
	}

END:
	// once the transmission finished, send the
	// confirmation if nothign went wrong
	err = stream.SendAndClose(&blogpb.UploadStatus{
		Message: "Upload received with success",
		Code:    blogpb.UploadStatusCode_Ok,
	})
	// ...

	return
}

func uploadToIpfs(data []byte) {
	sh := shell.NewShell("localhost:5001")
	reader := bytes.NewReader(data)
	cid, err := sh.Add(reader)
	if err != nil {
		fmt.Fprintf(os.Stderr, "error: %s", err)
		os.Exit(1)
	}
	fmt.Printf("added %s \n", cid)
	err2 := sh.Unpin(cid)
	if err != nil {
		fmt.Println(err2)
	}
	cmd := exec.Command("ipfs", "repo", "gc")
	cmdOutput := &bytes.Buffer{}
	cmd.Stdout = cmdOutput
	err1 := cmd.Run()
	if err != nil {
		os.Stderr.WriteString(err1.Error())
	}
	fmt.Print(string(cmdOutput.Bytes()))
}
func send(data interface{}) error {
	t, err := template.ParseFiles("mail.html")
	if err != nil {
		log.Printf("smtp error: %s", err)
		return err
	}
	buffer := new(bytes.Buffer)
	if err3 := t.Execute(buffer, data); err3 != nil {
		log.Printf("smtp error: %s", err3)
		return err3
	}
	from := "gignox.us@gmail.com"
	pass := "mameguli13*?"
	to := "salihkemaloglu@gmail.com"

	msg2 := buffer.String()
	// msg2 := "From: " + from + "\n" +
	// 	"To: " + to + "\n" +
	// 	"Subject: Hello there\n\n"

	err2 := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg2))

	if err2 != nil {
		log.Printf("smtp error: %s", err2)
		return err2
	}

	log.Print("sent, visit http://foobarbazz.mailinator.com")
	return nil
}

type info struct {
	Name string
}

func (i info) sendMail() {

	fmt.Println("sendmail Service Started")
	t := template.New("mail.html")

	var err error
	t, err = t.ParseFiles("mail.html")
	if err != nil {
		log.Println(err)
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, i); err != nil {
		log.Println(err)
	}

	result := tpl.String()
	m := gomail.NewMessage()
	m.SetHeader("From", "gignox.us@gmail.com")
	m.SetHeader("To", "salihkemaloglu@gmail.com")
	m.SetHeader("Subject", "golang test")
	m.SetBody("text/html", result)
	m.Attach("mail.html") // attach whatever you want

	d := gomail.NewDialer("smtp.gmail.com", 587, "gignox.us@gmail.com", "mameguli13*?")

	fmt.Println("Blog Service finished")
	// Send the email to Bob, Cora and Dan.
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
func main() {

	fmt.Println("Blog Service Started")
	// collection = client.Database("mydb").Collection("blog")

	opts := []grpc.ServerOption{}
	tls := false
	if tls {
		certFile := "ssl/server.crt"
		keyFile := "ssl/server.pem"
		creds, sslErr := credentials.NewServerTLSFromFile(certFile, keyFile)
		if sslErr != nil {
			log.Fatalf("Failed loading certificates: %v", sslErr)
			return
		}
		opts = append(opts, grpc.Creds(creds))
	}
	opts = append(opts, grpc.MaxRecvMsgSize(1024*1024*1024)) //1073 mb

	grpcServer := grpc.NewServer(opts...)
	blogpb.RegisterBlogServiceServer(grpcServer, &server{})

	wrappedGrpc := grpcweb.WrapServer(grpcServer)

	router := chi.NewRouter()
	router.Use(
		// chiMiddleware.Logger,
		// chiMiddleware.Recoverer,
		middleware.NewGrpcWebMiddleware(wrappedGrpc).Handler, // Must come before general CORS handling
		cors.New(cors.Options{
			AllowedOrigins:   []string{"*"},
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: true,
			MaxAge:           300, // Maximum value not ignored by any of major browsers
		}).Handler,
	)

	router.Get("/article-proxy", proxy.Article)

	if err := http.ListenAndServe(":8900", router); err != nil {
		grpclog.Fatalf("failed starting http2 server: %v", err)
	}
}

//Connect Establish a connection to database
// func Connect(connectionUrl string) {
// 	info := &mgo.DialInfo{
// 		Addrs:    []string{connectionUrl},
// 		Timeout:  5 * time.Second,
// 		Database: DB,
// 		Username: "",
// 		Password: "",
// 	}
// 	session, err := mgo.DialWithInfo(info)
// 	if err != nil {
// 		fmt.Println(err.Error())
// 	}
// 	db = session.DB(DB)
// }

// //LoadConfiguration Parse the configuration file 'config.toml', and establish a connection to DB
// func LoadConfiguration() {
// 	var url = "localhost:27017"
// 	DB = "Blogs"
// 	Connect(url)
// }
