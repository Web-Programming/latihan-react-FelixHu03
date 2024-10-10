export async function Post() {
    var data = [
        {
            'npm': '2327250059',
            'nama': 'FElix'
        },
        {
            'npm' : '2327250049',
            'nama' : 'Valencio'
        }
    ];

    return Response.json(data);
}