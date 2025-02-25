import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import TodoModel from "@/lib/models/ToDoModel";


const loadDB = async () => {

    await connectDB();
    console.log('DB loaded')
}

loadDB();

export async function POST(request){

    const{title, description} = await request.json();
    await TodoModel.create({
        title,
        description});

    return NextResponse.json({msg: 'ToDo added successfully!'})
}


export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({todos: todos})    
}

export async function DELETE(request){

    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({msg: 'ToDo deleted successfully!'})
}

export async function PUT(request){

    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(mongoId, {
        $set : {isCompleted : true}
    });
    return NextResponse.json({msg: 'ToDo updated successfully!'})
}