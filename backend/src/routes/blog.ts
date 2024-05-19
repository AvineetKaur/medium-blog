import { Hono } from "hono/quick";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    //get header
    //verfiy Header
    //if header is correct, we can procees with the call
    //else return 403 

    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1]
    const response = await verify(token, c.env.JWT_SECRET)
    if (response.id) {
        c.set("userId", response.id);
        await next();
    } else {
        c.status(403);
        return c.json({
            error: "You are not logged in"
        })
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const authorId = c.get("userId");

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }

    })
    return c.json({
        id: blog.id
    })


})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }

    })
    return c.json({
        id: blog.id
    })

})
//Todo:add Pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany();

    return c.json({
        blogs
    })
})
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = await c.req.param("id");

    const blog = await prisma.post.findFirst({
        where: {
            id: id
        },
    })
    return c.json({
        blog

    })

})



