/**
 * @swagger
 * /api/product/get?id={id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Product]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: posts by its id
 *       400:
 *         description: post can not be found
 */

/**
 * @swagger
 * /api/product/getall:
 *   get:
 *     summary: get all
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: posts by its id
 *       400:
 *         description: post can not be found
 */