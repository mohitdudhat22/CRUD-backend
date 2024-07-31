export const fetch = async (req, res) => {
    try {
        return res.json("Hello World!");s
    } catch (error) {
        res.status(500).json({ error: error});
    }
};